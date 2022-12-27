import java.util.*;
public class Main
{
    static int public_key;
    static int private_key;
    static int n;
    
    static int gcd(int a, int b)
    {
        
        if (b == 0)
            return a;
        else
            return gcd(b, a % b);
    }
    
    static void setkeys()
    {
    int prime1 = 11491; 
    int prime2 = 15331; 
    n = prime1 * prime2;
    int fi = (prime1 - 1) * (prime2 - 1);
    int e = 2;
    while (true) {
        if (gcd(e, fi) == 1)        
            break;
        e++;
    } 
    public_key = e;
    int d = 2;
    while (true) {
        if ((d * e) % fi == 1)
            break;
        d++;
    }
    private_key = d;
    }
 
 
    static long encrypt(double message)
    {
        int e = public_key;
        long encrpyted_text = 1;
        while (e!=0) {
            encrpyted_text *= message;
            encrpyted_text %= n;
            e--;
        }
    return encrpyted_text;
    }

    static long decrypt(long encrpyted_text)
    {
        int d = private_key;
        long decrypted = 1;
        while (d!=0) {
            decrypted *= encrpyted_text;
            decrypted %= n;
            d--;
        }
    return decrypted;
    }
 
    static List<Long> encoder(String message)
    {
        List<Long> form=new ArrayList<>();
        for(char letter : message.toCharArray())
        form.add(encrypt((int)letter));
        return form;
    }


    static String decoder(List<Long> encoded)
    {
        String s="";
    
        for(long num : encoded)
            s += (char)(decrypt(num));
        return s;
    }


	public static void main(String[] args) {
	    setkeys();
	    Scanner sc=new Scanner(System.in);
        System.out.println("Enter the message to send");
        String message = sc.nextLine();
        List<Long> coded=new ArrayList<>();
        coded=encoder(message);
        System.out.println("Initial message : "+message);
        System.out.println("The encoded message(encrypted by public)");
        for(long p : coded)
        System.out.print(p);
        System.out.println("");
            System.out.println("The decoded message(decrypted by private key)");
            System.out.println(decoder(coded));
	}
}
