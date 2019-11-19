export class cau_hinh {
    //Loại nhân viên
    static nhan_vien_sep = 1;
    static nhan_vien_linh = 2;
    // Lương nhân viên
    static luong_nhan_vien_full_sep = 20000000;
    static luong_nhan_vien_full_linh = 10000000;
    static luong_lam_them_mot_ngay = 800000;
    static luong_nhan_vien_part_time_theo_gio = 100000;
}

 class Nhan_vien {
    protected ten: String;
    protected luong: number;
    constructor (ten){
        this.ten = ten;
    }
    protected loai_nhan_vien(){
    }
    public tinh_luong(){
    }
    log_thong_tin(){
        return "Nhân viên: "+this.ten+" Loại nhân viên: "+ this.loai_nhan_vien() +" Lương: "+ this.luong+" VND"
    }
}

export class Nhan_vien_full_time extends Nhan_vien{
    private ngaylamthem;
    private loai_chuc_vu;
    constructor (ten: string, ngay_lam_them: number){
        super(ten);
        this.ngaylamthem = ngay_lam_them;
        this.loai_chuc_vu = cau_hinh.nhan_vien_linh;
    }
    setLoaiChucVu(loai_chuc_vu : number){
        this.loai_chuc_vu = loai_chuc_vu;
    }
    loai_nhan_vien(){
        if(this.loai_chuc_vu == cau_hinh.nhan_vien_linh){
            return "Nhân viên" + (this.ngaylamthem > 0 ? (" có " +this.ngaylamthem +" ngày làm thêm") : "")
        }else{
            return "Sếp" + (this.ngaylamthem > 0 ? (" có " +this.ngaylamthem +" ngày làm thêm") : "")
        }
    }
    tinh_luong(){
        if(this.loai_chuc_vu == cau_hinh.nhan_vien_linh){
         this.luong = cau_hinh.luong_nhan_vien_full_linh + this.ngaylamthem*cau_hinh.luong_lam_them_mot_ngay
        }else{
        this.luong = cau_hinh.luong_nhan_vien_full_sep + this.ngaylamthem*cau_hinh.luong_lam_them_mot_ngay
        }
    }
}

export class Nhan_vien_part_time extends Nhan_vien {
    private  gio_lam_viec: number;
    constructor(ten: String, gio_lam_viec: number){
        super(ten);
        this.gio_lam_viec = gio_lam_viec;
    }
    loai_nhan_vien(){
        return "Nhân viên thời vụ";
    }
    tinh_luong(){
         this.luong = cau_hinh.luong_nhan_vien_part_time_theo_gio*this.gio_lam_viec;
    }
}