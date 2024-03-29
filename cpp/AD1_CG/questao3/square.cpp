#include <stdio.h>
#include <stdlib.h>
#include <GL/gl.h>
#include <GL/glut.h>
#include <GL/glu.h>

void draw() {

glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

glColor3f(0.0f, 1.0f, 0.0f);

glBegin(GL_TRIANGLES);
glMatrixMode(GL_MODELVIEW);


// Vertices para GL_TRIANLGLE_STRIP

// glVertex3f(-1.0f, 1.0f, 1.0f);
// glVertex3f(1.0f, 1.0f, 1.0f);
// glVertex3f(-1.0f, -1.0f, 1.0f);
// glVertex3f(1.0f, -1.0f, 1.0f);
// glVertex3f(1.0f, -1.0f, -1.0f);
// glVertex3f(1.0f, 1.0f, 1.0f);
// glVertex3f(1.0f, 1.0f, -1.0f);
// glVertex3f(-1.0f, 1.0f, 1.0f);
// glVertex3f(-1.0f, 1.0f, -1.0f);
// glVertex3f(-1.0f, -1.0f, 1.0f);
// glVertex3f(-1.0f, -1.0f, -1.0f);
// glVertex3f(1.0f, -1.0f, -1.0f);
// glVertex3f(-1.0f, 1.0f, -1.0f);
// glVertex3f(1.0f, 1.0f, -1.0f);

// Usando Gl_TRIANGLES
glVertex3f(-1.0f, -1.0f, 1.0f);
glVertex3f(1.0f, -1.0f, 1.0f);
glVertex3f(-1.0f, 1.0f, 1.0f);
glVertex3f(1.0f, 1.0f, 1.0f);

glVertex3f(1.0f, -1.0f, 1.0f);
glVertex3f(1.0f, -1.0f, -1.0f);
glVertex3f(1.0f, 1.0f, 1.0f);
glVertex3f(1.0f, 1.0f, -1.0f);

glVertex3f(1.0f, -1.0f, -1.0f);
glVertex3f(-1.0f, -1.0f, -1.0f);
glVertex3f(1.0f, 1.0f, -1.0f);
glVertex3f(-1.0f, 1.0f, -1.0f);

glVertex3f(-1.0f, -1.0f, -1.0f);
glVertex3f(-1.0f, -1.0f, 1.0f);
glVertex3f(-1.0f, 1.0f, -1.0f);
glVertex3f(-1.0f, 1.0f, 1.0f);

glVertex3f(-1.0f, -1.0f, -1.0f);
glVertex3f(1.0f, -1.0f, -1.0f);
glVertex3f(-1.0f, -1.0f, 1.0f);
glVertex3f(1.0f, -1.0f, 1.0f);

glVertex3f(-1.0f, 1.0f, 1.0f);
glVertex3f(1.0f, 1.0f, 1.0f);
glVertex3f(-1.0f, 1.0f, -1.0f);
glVertex3f(1.0f, 1.0f, -1.0f);
glVertex3f(1.0f, 1.0f, 1.0f);

glVertex3f(-1.0f, 1.0f, 1.0f);
glVertex3f(1.0f, 1.0f, -1.0f);


glEnd();
glFlush();
glutSwapBuffers();
}

void reshape(int w, int h)
{
gluPerspective(60000.0, (GLfloat) w/(GLfloat) h, 0.20, 60000.0);
glTranslatef(0.0, 0.0, -5.0); // muda tamanho do cubo
 glPolygonMode(GL_FRONT_AND_BACK, GL_LINE);
}

int main(int argc, char ** argv) {

glutInit(&argc, argv);
glutInitWindowSize(500,500);
glutCreateWindow("Cubo Triangular");

glEnable(GL_DEPTH_TEST);
glutDisplayFunc(draw);
glutReshapeFunc(reshape);
glutMainLoop();
return 0;
}
