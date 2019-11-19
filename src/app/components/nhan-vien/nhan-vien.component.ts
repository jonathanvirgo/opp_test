import { Component, OnInit } from '@angular/core';
import { Nhan_vien_full_time, Nhan_vien_part_time, cau_hinh} from '../../class/nhan_vien';
@Component({
  selector: 'app-nhan-vien',
  templateUrl: './nhan-vien.component.html',
  styleUrls: ['./nhan-vien.component.scss']
})
export class NhanVienComponent implements OnInit {
  nv1 = new Nhan_vien_full_time("Nguyen",0);
  nv2 = new Nhan_vien_full_time("Tien",10);
  nv3 = new Nhan_vien_full_time("QD",15);
  nv4 = new Nhan_vien_part_time("Thom",100);
  constructor() { }

  ngOnInit() {
    this.nv1.setLoaiChucVu(cau_hinh.nhan_vien_sep);
    this.nv1.tinh_luong();
    this.nv2.tinh_luong();
    this.nv3.tinh_luong();
    this.nv4.tinh_luong();
  }

}
