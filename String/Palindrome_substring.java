package String;
import java.util.*;

public class Palindrome_substring {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scn = new Scanner(System.in);
		String str = scn.nextLine();
		print_substring(str);
		

	}
	public static void print_substring(String str)
	{
		for(int i=0;i<str.length();i++)
		{
			for(int j=i+1;j<=str.length();j++)
			{
				String s= str.substring(i,j);
				if(isPalindrome(s)==true)
				{
					System.out.println(s);
				}
				
				
			}
			
		}
		
	}
	public static boolean isPalindrome(String str)
	{
		int i=0;
		int j=str.length()-1;
		while(i<j)
		{
			if(str.charAt(i)!=str.charAt(j))
			{
				return false;
			}
			i++;
			j--;
		}
		return true;
	}

}
