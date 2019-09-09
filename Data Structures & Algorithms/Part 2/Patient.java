class Patient {
    int id;
    String name;
    int age;
    int ward;
    String surgery_type;
    
    patient(int a, String b, int c, int d, String e) {
        id = a;
        name = b;
        age = c;
        ward = d;
        surgery_type = e;
    }

    public getID() {
        return this.id;
    }
}