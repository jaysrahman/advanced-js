#include <stdio.h>
#include <conio.h>
#include <string.h>

struct TMhs
{
    char NIM[11];
    char Nama[21];
    int NilaiUTS, NilaiUAS, NilaiQuiz;
    float NilaiAkhir;
    char index;
};

main()
{
    TMhs mhs1, mhs2;

    printf("pengisian data");
    printf("NIM : ");
    gets(mhs1.NIM);
    printf("NAMA : ");
    gets(mhs1.Nama);
    printf("Nilai QUIZ : ");
    scanf("%d", &mhs1.NilaiQuiz);
    printf("Nilai UTS : ");
    scanf("%d", &mhs1.NilaiUTS);
    printf("Nilai UAS : ");
    scanf("%d", &mhs1.NilaiUAS);

    mhs1.NilaiAkhir = 0.2 * mhs1.NilaiQuiz + 0.3 * mhs1.NilaiUTS + 0.5 * mhs1.NilaiUAS;

    if (mhs1.NilaiAkhir >= 80)
        mhs1.index = 'A';
    else if (mhs1.NilaiAkhir >= 60)
        mhs1.index = 'B';
    else if (mhs1.NilaiAkhir >= 40)
        mhs1.index = 'C';
    else if (mhs1.NilaiAkhir >= 20)
        mhs1.index = 'D';
    else if (mhs1.NilaiAkhir >= 80)
        mhs1.index = 'E';

    mhs2 = mhs1; // mengisikan semua data di mhs1 ke mhs2

    printf("Data yang telah dimasukan : ");
    printf("NIM : %s\n", mhs2.NIM);
    printf("NAMA : %s\n", mhs2.Nama);
    printf("Nilai QUIZ : %i\n", mhs2.NilaiQuiz);
    printf("Nilai UTS : %d\n", mhs2.NilaiUTS);
    printf("Nilai UTAS : %d\n", mhs2.NilaiUAS);
    printf("Nilai Akhir : %.2f\n", mhs2.NilaiAkhir);
    printf("Index : %c\n", mhs2.index);

    getch();
}