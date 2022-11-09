package String;
import java.util.*;

public class Can_you_read_this {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scn = new Scanner(System.in);
		String str = scn.nextLine();
		IsUppercase(str);
		
		
		
		

	}
	public static void IsUppercase(String str)
	{
		//boolean capitalFlag=false;
	
		for(int i=0;i<str.length();i++)
		{
			char ch = str.charAt(i);
			if (Character.isUpperCase(ch)) {
		           System.out.println();
		           System.out.print(ch);
		      }
			else
			{
				System.out.print(ch);
				
			}
			
		}
		

	}
	}
