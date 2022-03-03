#include <GL/gl.h>
#include <GL/glut.h>
#include <math.h>

#define WINDOW_WIDTH 640
#define WINDOW_HEIGHT 480
#define WINDOW_NAME "Cilynder"

void cilynder(float r, float h, int n) {
  int i;
  float angle = 2.0f * M_PI / n;

  float top_x = 0.0f, top_y = h / 2.0f, top_z = 0.0f;
  float bottom_x = 0.0f, bottom_y = -h / 2.0f, bottom_z = 0.0f;

  glBegin(GL_TRIANGLE_STRIP);

  for(i = 0; i< n; i++) {
    float p0_x = r * cos(i * angle);
    float p0_z = r * sin(i * angle);

    float p1_x = r * cos((i + 1) * angle);
    float p1_z = r * sin((i + 1) * angle);

    // Topo do cilindro
    glNormal3f(0.0f, 1.0f, 0.0f);
    glVertex3f(top_x, top_y, top_z);
    glVertex3f(p0_x, top_y, p0_z);
    glVertex3f(p1_x, top_y, p1_z);

    // Meio do cilindro
    glNormal3f(p0_x / r, 0.0f, p0_z / r);
    glVertex3f(p0_x, top_y, p0_z);
    glNormal3f(p0_x / r, 0.0f, p0_z / r);
    glVertex3f(p0_x, bottom_y, p0_z);
    glNormal3f(p1_x / r, 0.0f, p1_z / r);
    glVertex3f(p1_x, top_y, p1_z);

    glNormal3f(p1_x / r, 0.0f, p1_z / r);
    glVertex3f(p1_x, top_y, p1_z);
    glNormal3f(p0_x / r, 0.0f, p0_z / r);
    glVertex3f(p0_x, bottom_y, p0_z);
    glNormal3f(p1_x / r, 0.0f, p1_z / r);
    glVertex3f(p1_x, bottom_y, p1_z);

    // Base do Cilindro
    glNormal3f(0.0f, -1.0f, 0.0f);
    glVertex3f(p1_x, bottom_y, p1_z);
    glVertex3f(p0_x, bottom_y, p0_z);
    glVertex3f(bottom_x, bottom_y, bottom_z);
  }

  glEnd();
}

void display(){
 glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

 glMatrixMode(GL_MODELVIEW);
 glLoadIdentity();
 gluLookAt(3.0f, 3.0f, 3.0f, 0.0f, 0.0f, 0.0f, 0.0f, 1.0f, 0.0f);

 // Cilindro
 cilynder(1.0f, 2.0f, 10);

 glutSwapBuffers();
}

int main(int argc, char** argv) {
 glutInit(&argc, argv);
 glutInitDisplayMode(GLUT_RGB | GLUT_DOUBLE | GLUT_DEPTH);
 glutInitWindowSize(WINDOW_WIDTH, WINDOW_HEIGHT);
 glutCreateWindow(WINDOW_NAME);

 glutDisplayFunc(display);

 glEnable(GL_LIGHTING);
 glEnable(GL_LIGHT0);
 glEnable(GL_DEPTH_TEST);
 glPolygonMode(GL_FRONT_AND_BACK, GL_LINE);

 glMatrixMode(GL_PROJECTION);
 glLoadIdentity();
 gluPerspective(75.0f, 1.0f * WINDOW_WIDTH / WINDOW_HEIGHT, 10e-3, 10e3);

 glutMainLoop();

 return 0;
}
