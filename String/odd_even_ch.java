package String;

import java.util.Scanner;

public class odd_even_ch {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scn =new Scanner(System.in);
		String str =scn.nextLine();

	}
	public static void odd_even(String str)
	{
		for(int i=0;i<str.length();i++)
		{
			char ch =str.charAt(i);
			if(i%2==0)
			{
				char Upper=Character.toLowerCase(ch);
				System.out.print(Upper);
			}
			else
			{
				char lower =Character.toUpperCase(ch);
				System.out.print(lower);
			}

		}
	}

}
