import java.util.Scanner;

class index {
static Queue q = new Queue(10);
    public static void main(String[] args) {
       prog();
    }

   public static void prog() {

        Scanner input = new Scanner(System.in);

        System.out.print("Please enter the mode of the program; [show] [add] [take]");

        String mode = input.next();

        if(mode == "show") {
            q.printQueue();

        } else if (mode == "add") {

            System.out.print("Please enter details of the patient respectively by hitting enter one after the other;[patient_id]\n[patient_name]\n[age]\n[ward_no]\n[type_of_surgery]");
            int id = input.nextInt();
            String name = input.next();
            int age = input.nextInt();
            int ward = input.nextInt();
            String surgery_type = input.next();
            Patient p = new Patient(id, name, age, ward, surgery_type);

            q.enqueue(p);

        } else if (mode == "take") {

           Patient removed = q.dequeue();
           System.out.print("Patient " + removed.id + "is ready to undergo " + removed.surgery_type " surgery.");
        } else {

            input.close();
            System.out.println("Wrong mode!");
        };
        prog();
    }
    
}