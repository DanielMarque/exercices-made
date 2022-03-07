#include <stdio.h>
#include <stdlib.h>
#include <GL/gl.h>
#include <GL/glut.h>
#include <GL/glu.h>

void draw() {

glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

glColor3f(0.0f, 1.0f, 0.0f);


// desenho de uma face do quadrado
glBegin(GL_TRIANGLES);
glMatrixMode(GL_MODELVIEW);

//CUBO

// parte BAIXO cubo (y = 1.0f)
//          x  ,  y  ,  z

// Frente Azul
glColor3f(0.0f, 0.0f, 1.0f); // Blue
glVertex3f(1.0f, -1.0f, 0.0f);
glVertex3f(-1.0f, 1.0f, 0.0f);
glVertex3f(-1.0f, -1.0f, 0.0f);

// Frente Amarela
glColor3f(0.0f, 1.0f, 1.0f); // Yellow
glVertex3f(1.0f, -1.0f, 0.0f);
glVertex3f(-1.0f, 1.0f, 0.0f);
glVertex3f(1.0f, 1.0f, 0.0f);

// Frente Amarela
glColor3f(1.0f, 0.0f, 0.0f); // Red
glVertex3f(1.0f, 1.0f, 1.0f);



glEnd();

glFlush();

// Call the functions to draw objects here
// display it

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
// tamanho da janela
glutInitWindowSize(500,500);
glutCreateWindow("Cube");

glEnable(GL_DEPTH_TEST);
glutDisplayFunc(draw);
glutReshapeFunc(reshape);
// Start the Main Loop
glutMainLoop();
return 0;
}
