#include<stdio.h>
int main()
{
    int T, i, n, x , count = 0;
    scanf("%d", &T);
    for(i = 0; i < T; i++){
        scanf("%d", &n);
        x = n;
        while(x != 0){
            x /= 10;
            ++count;
        }

//        printf("%d %d", n,x);
        if (count < 100){
            if(n % 2 == 0){
                printf("even\n");
            } else {
                printf("odd\n");
            }
            count = 0;
        }
    }
    return 0;
}
