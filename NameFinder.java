import java.util.Scanner;
public class NameFinder {
    public static void main(String[] args) {
        Scanner mox = new Scanner(System.in);
        String a, b, c, d, e, f;
        String mo;
        a = " A    F    K    P    U";
        b = " B    G    L    Q    V";
        c = " C    H    M    R    W";
        d = " D    I    N    S    X";
        e = " E    J    O    T    Y";
        f = " Z";
        mo = "\"1\"  \"2\"  \"3\"  \"4\"  \"5\"  \"6\"";

        System.out.println("WELCOME TO THE NAME FINDER BY: SHEVANG SHARMA");
        String blank = mox.nextLine();
        System.out.println("GUESS A NAME OR ANY WORD WHICH HAS MAXIMUM - 4 WORDS");
        System.out.println(mo);
        System.out.println(" A    B    C    D    E\n F    G    H    I    J\n K    L    M    N    O\n P    Q    R    S    T");
        System.out.println(" U    V    W    X    Y    Z");
        System.out.println("NOW THE WORD WITCH YOU HAVE THOUGHT IN YOUR MIND RECALL IT!! THEN THINK ABOUT THE\nFIRST\"LETTER\" OF YOUR WORD ");
        System.out.println("NOW SEE YOUR FIRST LETTER IN WITCH LINE FROM THE UPPER SHOWING (ALPHABETS) AND WRITE DOWN IN WITCH LINE IT IS ");
        System.out.println("NOW RESPECTIVELY DO THE SAME FROM THE REMAINING THREE WORDS");
        int UserInput;
        System.out.println("WRITE YOUR 1 WORD LINE NUMBER HERE");
        UserInput = mox.nextInt();
        System.out.println("WRITE YOUR 2 WORD LINE NUMBER HERE");
        int UserInput2 = mox.nextInt();
        System.out.println("WRITE YOUR 3 WORD LINE NUMBER HERE");
        int UserInput3 = mox.nextInt();
        System.out.println("WRITE YOUR 4 WORD LINE NUMBER HERE");
        int UserInput4 = mox.nextInt();
       
        System.out.println(mo);
        if (UserInput == 1) {
            System.out.println(a);
            

        } else if (UserInput == 2) {
            System.out.println(b);
            
        }
        if (UserInput == 3) {
            System.out.println(c);
            
        } else if (UserInput == 4) {
            System.out.println(d);
            
        }
        if (UserInput == 5) {
            System.out.println(e);
            
        } else if (UserInput == 6) {
            System.out.println(f);
           
        }
        if (UserInput2 == 1) {
            System.out.println(a);
            
        } else if (UserInput2 == 2) {
            System.out.println(b);
            
        }
        if (UserInput2 == 3) {
            System.out.println(c);
            
        } else if (UserInput2 == 4) {
            System.out.println(d);
            
        }
        if (UserInput2 == 5) {
            System.out.println(e);
            
        } else if (UserInput2 == 6) {
            System.out.println(f);
            
        }
        if (UserInput3 == 1) {
            System.out.println(a);
           

        } else if (UserInput3 == 2) {
            System.out.println(b);
            
        }
        if (UserInput3 == 3) {
            System.out.println(c);
            

        } else if (UserInput3 == 4) {
            System.out.println(d);
            

        }
        if (UserInput3 == 5) {
            System.out.println(e);
            
        } else if (UserInput3 == 6) {
            System.out.println(f);
            
        }
        if (UserInput4 == 1) {
            System.out.println(a);
            

        } else if (UserInput4 == 2) {
            System.out.println(b);
            

        }
        if (UserInput4 == 3) {
            System.out.println(c);
            

        } else if (UserInput4 == 4) {
            System.out.println(d);
            

        }
        if (UserInput4 == 5) {
            System.out.println(e);
            

        } else if (UserInput4 == 6) {
            System.out.println(f);
            


        }
        System.out.println("NOW DO THE SAME ABOVE PROCESS WITH THIS UPPER SHOWING ALPHABETS^^^");
        int UserInputAgain1, UserInputAgain2, UserInputAgain3, UserInputAgain4;
        System.out.println("WRITE YOUR FIRST WORD LINE NUMBER HERE");
        UserInputAgain1 = mox.nextInt();
        System.out.println("WRITE YOUR SECOND WORD LINE NUMBER HERE");
        UserInputAgain2 = mox.nextInt();
        System.out.println("WRITE YOUR THIRD WORD LINE NUMBER");
        UserInputAgain3 = mox.nextInt();
        System.out.println("WRITE YOUR FOURTH WORD LINE NUMBER");
        UserInputAgain4 = mox.nextInt();
        System.out.println("OKAY SO YOUR BEAUTIFULL WORD IS");
        if (UserInput==1&&UserInputAgain1==1){
            System.out.println("A");

        }
        if (UserInput==1&&UserInputAgain1==2){
            System.out.println("F");
        }
        if (UserInput==1&&UserInputAgain1==3){
            System.out.println("K");
        }
        if (UserInput==1&&UserInputAgain1==4){
            System.out.println("P");
        }
        if (UserInput==1&&UserInputAgain1==5){
            System.out.println("U");
        }
        if (UserInput==1&&UserInputAgain1==6) {
            System.out.println("Z");
        }
        if (UserInput==2&&UserInputAgain1==1){
            System.out.println("B");

        }
        if (UserInput==2&&UserInputAgain1==2){
            System.out.println("G");
        }
        if (UserInput==2&&UserInputAgain1==3){
            System.out.println("L");
        }
        if (UserInput==2&&UserInputAgain1==4){
            System.out.println("Q");
        }
        if (UserInput==2&&UserInputAgain1==5){
            System.out.println("V");
        }
        if (UserInput==2&&UserInputAgain1==6) {
            System.out.println("Z");
        }
        if (UserInput==3&&UserInputAgain1==1){
            System.out.println("C");

        }
        if (UserInput==3&&UserInputAgain1==2){
            System.out.println("H");
        }
        if (UserInput==3&&UserInputAgain1==3){
            System.out.println("M");
        }
        if (UserInput==3&&UserInputAgain1==4){
            System.out.println("R");
        }
        if (UserInput==3&&UserInputAgain1==5){
            System.out.println("W");
        }
        if (UserInput==3&&UserInputAgain1==6) {
            System.out.println("Z");
        }
        if (UserInput==4&&UserInputAgain1==1){
            System.out.println("D");

        }
        if (UserInput==4&&UserInputAgain1==2){
            System.out.println("I");
        }
        if (UserInput==4&&UserInputAgain1==3){
            System.out.println("N");
        }
        if (UserInput==4&&UserInputAgain1==4){
            System.out.println("S");
        }
        if (UserInput==4&&UserInputAgain1==5){
            System.out.println("X");
        }
        if (UserInput==4&&UserInputAgain1==6) {
            System.out.println("Z");
        }
        if (UserInput==5&&UserInputAgain1==1){
            System.out.println("E");

        }
        if (UserInput==5&&UserInputAgain1==2){
            System.out.println("J");
        }
        if (UserInput==5&&UserInputAgain1==3){
            System.out.println("O");
        }
        if (UserInput==5&&UserInputAgain1==4){
            System.out.println("T");
        }
        if (UserInput==5&&UserInputAgain1==5) {
            System.out.println("Y");
            if (UserInput == 5 && UserInputAgain1 == 6) {
                System.out.println("Z");
            }
        }
        if (UserInput2==1&&UserInputAgain2==1){
            System.out.println("A");

        }
        if (UserInput2==1&&UserInputAgain2==2){
            System.out.println("F");
        }
        if (UserInput2==1&&UserInputAgain2==3){
            System.out.println("K");
        }
        if (UserInput2==1&&UserInputAgain2==4){
            System.out.println("P");
        }
        if (UserInput2==1&&UserInputAgain2==5){
            System.out.println("U");
        }
        if (UserInput2==1&&UserInputAgain2==6) {
            System.out.println("Z");
        }
        if (UserInput2==2&&UserInputAgain2==1){
            System.out.println("B");

        }
        if (UserInput2==2&&UserInputAgain2==2){
            System.out.println("G");
        }
        if (UserInput2==2&&UserInputAgain2==3){
            System.out.println("L");
        }
        if (UserInput2==2&&UserInputAgain2==4){
            System.out.println("Q");
        }
        if (UserInput2==2&&UserInputAgain2==5){
            System.out.println("V");
        }
        if (UserInput2==2&&UserInputAgain2==6) {
            System.out.println("Z");
        }
        if (UserInput2==3&&UserInputAgain2==1){
            System.out.println("C");

        }
        if (UserInput2==3&&UserInputAgain2==2){
            System.out.println("H");
        }
        if (UserInput2==3&&UserInputAgain2==3){
            System.out.println("M");
        }
        if (UserInput2==3&&UserInputAgain2==4){
            System.out.println("R");
        }
        if (UserInput2==3&&UserInputAgain2==5){
            System.out.println("W");
        }
        if (UserInput2==3&&UserInputAgain2==6) {
            System.out.println("Z");
        }
        if (UserInput2==4&&UserInputAgain2==1){
            System.out.println("D");

        }
        if (UserInput2==4&&UserInputAgain2==2){
            System.out.println("I");
        }
        if (UserInput2==4&&UserInputAgain2==3){
            System.out.println("N");
        }
        if (UserInput2==4&&UserInputAgain2==4){
            System.out.println("S");
        }
        if (UserInput2==4&&UserInputAgain2==5){
            System.out.println("X");
        }
        if (UserInput2==4&&UserInputAgain2==6) {
            System.out.println("Z");
        }
        if (UserInput2==5&&UserInputAgain2==1){
            System.out.println("E");

        }
        if (UserInput2==5&&UserInputAgain2==2){
            System.out.println("J");
        }
        if (UserInput2==5&&UserInputAgain2==3){
            System.out.println("O");
        }
        if (UserInput2==5&&UserInputAgain2==4){
            System.out.println("T");
        }
        if (UserInput2==5&&UserInputAgain2==5) {
            System.out.println("Y");
            if (UserInput2== 5 && UserInputAgain2 == 6) {
                System.out.println("Z");
            }
        }
        if (UserInput3==1&&UserInputAgain3==1){
            System.out.println("A");

        }
        if (UserInput3==1&&UserInputAgain3==2){
            System.out.println("F");
        }
        if (UserInput3==1&&UserInputAgain3==3){
            System.out.println("K");
        }
        if (UserInput3==1&&UserInputAgain3==4){
            System.out.println("P");
        }
        if (UserInput3==1&&UserInputAgain3==5){
            System.out.println("U");
        }
        if (UserInput3==1&&UserInputAgain3==6) {
            System.out.println("Z");
        }
        if (UserInput3==2&&UserInputAgain3==1){
            System.out.println("B");

        }
        if (UserInput3==2&&UserInputAgain3==2){
            System.out.println("G");
        }
        if (UserInput3==2&&UserInputAgain3==3){
            System.out.println("L");
        }
        if (UserInput3==2&&UserInputAgain3==4){
            System.out.println("Q");
        }
        if (UserInput3==2&&UserInputAgain3==5){
            System.out.println("V");
        }
        if (UserInput3==2&&UserInputAgain3==6) {
            System.out.println("Z");
        }
        if (UserInput3==3&&UserInputAgain3==1){

            System.out.println("C");

        }
        if (UserInput3==3&&UserInputAgain3==2){
            System.out.println("H");
        }
        if (UserInput3==3&&UserInputAgain3==3){
            System.out.println("M");
        }
        if (UserInput3==3&&UserInputAgain3==4){
            System.out.println("R");
        }
        if (UserInput3==3&&UserInputAgain3==5){
            System.out.println("W");
        }
        if (UserInput3==3&&UserInputAgain3==6) {
            System.out.println("Z");
        }
        if (UserInput3==4&&UserInputAgain3==1){
            System.out.println("D");

        }
        if (UserInput3==4&&UserInputAgain3==2){
            System.out.println("I");
        }
        if (UserInput3==4&&UserInputAgain3==3){

            System.out.println("N");
        }
        if (UserInput3==4&&UserInputAgain3==4){
            System.out.println("S");
        }
        if (UserInput3==4&&UserInputAgain3==5){
            System.out.println("X");
        }
        if (UserInput3==4&&UserInputAgain3==6) {
            System.out.println("Z");
        }
        if (UserInput3==5&&UserInputAgain3==1){
            System.out.println("E");

        }
        if (UserInput3==5&&UserInputAgain3==2){
            System.out.println("J");
        }
        if (UserInput3==5&&UserInputAgain3==3){
            System.out.println("O");
        }
        if (UserInput3==5&&UserInputAgain3==4){
            System.out.println("T");
        }
        if (UserInput3==5&&UserInputAgain3==5) {
            System.out.println("Y");
            if (UserInput3== 5 && UserInputAgain3 == 6) {
                System.out.println("Z");
            }
        }
        if (UserInput4==1&&UserInputAgain4==1){
            System.out.println("A");

        }
        if (UserInput4==1&&UserInputAgain4==2){
            System.out.println("F");
        }
        if (UserInput4==1&&UserInputAgain4==3){
            System.out.println("K");
        }
        if (UserInput4==1&&UserInputAgain4==4){
            System.out.println("P");
        }
        if (UserInput4==1&&UserInputAgain4==5){
            System.out.println("U");
        }
        if (UserInput4==1&&UserInputAgain4==6) {
            System.out.println("Z");
        }
        if (UserInput4==2&&UserInputAgain4==1){
            System.out.println("B");

        }
        if (UserInput4==2&&UserInputAgain4==2){
            System.out.println("G");
        }
        if (UserInput4==2&&UserInputAgain4==3){
            System.out.println("L");
        }
        if (UserInput4==2&&UserInputAgain4==4){
            System.out.println("Q");
        }
        if (UserInput4==2&&UserInputAgain4==5){
            System.out.println("V");
        }
        if (UserInput4==2&&UserInputAgain4==6) {
            System.out.println("Z");
        }
        if (UserInput4==3&&UserInputAgain4==1){
            System.out.println("C");

        }
        if (UserInput4==3&&UserInputAgain4==2){
            System.out.println("H");
        }
        if (UserInput4==3&&UserInputAgain4==3){
            System.out.println("M");
        }
        if (UserInput4==3&&UserInputAgain4==4){
            System.out.println("R");
        }
        if (UserInput4==3&&UserInputAgain4==5){
            System.out.println("W");
        }
        if (UserInput4==3&&UserInputAgain4==6) {
            System.out.println("Z");
        }
        if (UserInput4==4&&UserInputAgain4==1){
            System.out.println("D");

        }
        if (UserInput4==4&&UserInputAgain4==2){
            System.out.println("I");
        }
        if (UserInput4==4&&UserInputAgain4==3){
            System.out.println("N");
        }
        if (UserInput4==4&&UserInputAgain4==4){
            System.out.println("S");
        }
        if (UserInput4==4&&UserInputAgain4==5){
            System.out.println("X");
        }
        if (UserInput4==4&&UserInputAgain4==6) {
            System.out.println("Z");
        }
        if (UserInput4==5&&UserInputAgain4==1){
            System.out.println("E");

        }
        if (UserInput4==5&&UserInputAgain4==2){
            System.out.println("J");
        }
        if (UserInput4==5&&UserInputAgain4==3){
            System.out.println("O");
        }
        if (UserInput4==5&&UserInputAgain4==4){
            System.out.println("T");
        }
        if (UserInput4==5&&UserInputAgain4==5) {
            System.out.println("Y");
            if (UserInput4== 5 && UserInputAgain4 == 6) {
                System.out.println("Z");
            }
        }




    }
}