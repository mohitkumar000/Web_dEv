package String;

import java.util.Scanner;

public class String_toggle_case {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scn =new Scanner(System.in);
		String str =scn.nextLine();
		toggle(str);

	}
	public static void toggle(String str)
	{
		for(int i=0;i<str.length();i++)
		{
			char ch =str.charAt(i);
			if(Character.isUpperCase(ch))
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
