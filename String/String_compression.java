package String;
import java.util.*;
public class String_compression {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scn =new Scanner(System.in);
		String str =scn.nextLine();
		String new_str=string_compression(str);
		System.out.println(new_str);
		

	}
	public static String string_compression(String str)
	{
		String s =str.charAt(0)+"";
		 int count =1;
		 for(int i=1;i<str.length();i++)
		 {
			 char curr =str.charAt(i);
			 char prev =str.charAt(i-1);
			 if(curr ==prev)
			 {
				 count++;
			 }
			 else
			 {
				 if(count>1)
				 {
					 s+=count;
					 count =1;
				 }
				 s+=curr;
			 }
			 
		 }
		 if(count>1)
		 {
			 s+=count;
			 count=1;
		 }
		 return s;
		
	}
}
