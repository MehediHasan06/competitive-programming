#include <stdio.h>
int main()
{
    int T, i, x;
    scanf("%d", &T);
    for(i = 0; i < T; i++){
        scanf("%d", &x);
        if(x % 2 == 0){
            printf("even\n");
        } else {
            printf("odd\n");
        }
    }
    return 0;
}
