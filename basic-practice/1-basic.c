#include <stdio.h>

int main1()
{
    printf("Hello World\n");
    return 0;
}

int main2()
{
    int a = 50, b = 60, sum;
    sum = a + b;
    printf("Sum = %d\n", sum);
    return 0;
}


int main3()
{
    double x = 10.5;
    int a = (int)x; //Type cast to integar from double
    printf("x = %lf & a = %d\n", x, a); // output: x = 10.50000 & a = 10
    printf("x = %0.2lf", x); // output: x = 10.50
    return 0;
}


int main()
{
    int a, b, sum;
    scanf("%d %d", &a, &b);
    sum = a + b;
    printf("Sum = %d\n", sum);
    return 0;
}


