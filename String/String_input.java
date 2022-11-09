package String;
import java.util.*;
public class String_input {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scn = new Scanner(System.in);
		//String s=scn.next();//it will only one word
		//System.out.println(s);
		//String s1 =scn.nextLine();
		//System.out.println(s1);//it will print whole line
		
		String s ="helloafakdjfbdfbodfjdf";
		System.out.println(s.length());
		System.out.println(s.charAt(5));//to print char from string at a given indx
		String s1 ="hellohelloafakdjfbdfbodfjdf";
		System.out.println(s.equals(s1));//to check equality of a string
		
		String s3 ="rat";
		String s4 ="rat2";
		
		System.out.println(s3.compareTo(s4));//s3>s4+ve in equal =0; 
		String ss =s.substring(0,6);
		System.out.println(ss);
		
		
				
		
		
		
		
		

	}

}
