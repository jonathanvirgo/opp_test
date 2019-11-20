import { Component, OnInit } from '@angular/core';
import { Nhan_vien_full_time, Nhan_vien_part_time, cau_hinh, Nhan_vien} from '../../class/nhan_vien';
@Component({
  selector: 'app-nhan-vien',
  templateUrl: './nhan-vien.component.html',
  styleUrls: ['./nhan-vien.component.scss']
})
export class NhanVienComponent implements OnInit {
  ten : string;
  loai: string;
  chuc_vu: number;
  ngay: number;
  gio: number;
  nv1 = new Nhan_vien_full_time("Nguyen",0);
  nv2 = new Nhan_vien_full_time("Tien",10);
  nv3 = new Nhan_vien_full_time("QD",15);
  nv4 = new Nhan_vien_part_time("Thom",100);
  nv : Nhan_vien[];
  constructor() { }

  ngOnInit() {
    this.nv = [];
    this.nv1.setLoaiChucVu(cau_hinh.nhan_vien_sep);
    this.nv.push(this.nv1,this.nv2,this.nv3,this.nv4);
    console.log("NV",this.nv)
    this.nv.forEach(s => {
      s.tinh_luong();
    })
  }
  them_vao_mang(){
    console.log("Du lieu",this.ten,this.loai,this.chuc_vu,this.ngay,this.gio);
    if(this.loai){
      if(this.loai == 'full_time'){
        let nv_full = new Nhan_vien_full_time(this.ten ? this.ten : 'Không tên', this.ngay ? this.ngay : 0);
        this.chuc_vu ? nv_full.setLoaiChucVu(this.chuc_vu) : nv_full.setLoaiChucVu(2);
        nv_full.tinh_luong();
        this.nv.push(nv_full);
      }else{
        if(this.loai == 'part_time'){
          let nv_part = new Nhan_vien_part_time(this.ten ? this.ten : 'Không tên', this.gio ? this.gio : 0);
          nv_part.tinh_luong();
          this.nv.push(nv_part);
        }
      }
    }else{
      return;
    }
    this.xoa_du_lieu();
  }
  xoa_du_lieu(){
    this.ten = '';
    this.loai = '';
    this.chuc_vu = null;
    this.ngay = null;
    this.gio = null;
  }
}
