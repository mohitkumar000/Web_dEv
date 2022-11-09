package geek_for_geeks;
import java.util.*;
public class Wave_array {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scn = new Scanner(System.in);
		int [] arr = {2,4,7,8,9,10};
		Arrays.sort(arr);
		
	for(int i =0;i<arr.length;i++)
		{
		int temp =arr[i];
		arr [i]=arr[i+1];
		arr[i+1]=temp;
		i++;
		}
		for(int j =0;j<arr.length;j++) 
		{
			System.out.println(arr[j]);
		}

	}
	

}
