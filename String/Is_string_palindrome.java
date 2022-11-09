package String;
import java.util.*;



public class Is_string_palindrome {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scn = new Scanner(System.in);
		String str =scn.nextLine();
		if(isPalindrome(str)==true)
		{
			System.out.println(true);
		}
		else
		{
			System.out.println(false);
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
