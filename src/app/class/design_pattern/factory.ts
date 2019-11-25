export interface Shape{
    draw();
}

export class hinh_chu_nhat implements Shape{
    draw() {
        return "Đây là hình chữ nhật"
    }
}

export class hinh_vuong implements Shape{
    draw() {
        return "Đây là hình vuông"
    }
}
export class hinh_tron implements Shape{
    draw() {
        return "Đây là hình tròn"
    }
}

export class ShapeFactory{
    private constructor(){}
   static get_hinh(loai : string){
        if(loai == null){
            return;
        }
        if(loai == 'hinh_tron'){
            return new hinh_tron();
        }else if(loai == 'hinh_vuong'){
            return new hinh_vuong();
        }else if(loai == 'hinh_chu_nhat'){
            return new hinh_chu_nhat();
        }
        return null;
    }
}