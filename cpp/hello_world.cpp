#include <GLFW/glfw3.h>

int main(void) {
    GLFWwindow* window;

    /* Initialize the library */
    if (!glfwInit())
        return -1;

    /* Create a windowed mode window and its OpenGL context */
    window = glfwCreateWindow(640, 480, "Hello World", NULL, NULL);
    if (!window)
    {
        glfwTerminate();
        return -1;
    }

    /* Make the window's context current */
    glfwMakeContextCurrent(window);

    /* Loop until the user closes the window */
    while (!glfwWindowShouldClose(window))
    {
        /* Render here */
        glClear(GL_TRIANGLES);

        /* Swap front and back buffers */
        glfwSwapBuffers(window);

         glFrontFace(GL_CW);

        glBegin(GL_TRIANGLE_STRIP);
        glVertex3f( 0.0f, 1.0f, 0.0f ); //vertex 1
        glVertex3f( 0.0f, 0.0f, 0.0f ); //vertex 2
        glVertex3f( 1.0f, 1.0f, 0.0f ); //vertex 3
        glVertex3f( 1.5f, 0.0f, 0.0f ); //vertex 4
        glEnd();

        /* Poll for and process events */
        glfwPollEvents();
    }

    glfwTerminate();
    return 0;
}
