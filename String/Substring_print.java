package String;

import java.util.Iterator;

public class Substring_print {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String syd ="sayeed";
		print_substring(syd);
		
		

	}
	public static void print_substring(String str)
	{
		for(int i=0;i<str.length();i++)
		{
			for(int j=i+1;j<=str.length();j++)
			{
				System.out.println(str.substring(i,j));
			}
			
		}
		
	}

}
