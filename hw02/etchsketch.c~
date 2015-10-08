#include <stdio.h>
#define MAXX 50
#define MAXY 50

void print_screen(char screen[MAXX][MAXY]){
int i, j;
for(i =0; i < MAXX; i++)
{
for(j = 0; j < MAXY; j++)
{
if(screen[i][j]=='x')
printf("x");
else	printf(" ");
}
printf("\n");
}
}
int main(int argc, char **argv) {
int xpos = 0, ypos = 0;
int i, j;

char screen[MAXX][MAXY];

for(i =0; i < MAXX; i++)
for(j = 0; j < MAXY; j++)
screen[i][j] = ' ';
char c;
while(1){
c= getchar();

if(c == 'x')
break;
//The keys w a s d are used to go up, left, down, right respectively.
else if(c == 'w'){
xpos--;
screen[xpos][ypos] = 'x';
}
else if(c == 's'){
xpos++;
screen[xpos][ypos] = 'x';
}
else if(c == 'a'){
ypos--;
screen[xpos][ypos] = 'x';
}
else if(c == 'd'){
ypos++;
screen[xpos][ypos] = 'x';
}
else
continue;
//Press the button two types i mean type the letters twice from second turn onwords.
print_screen(screen);
}
return 0;
}
