// cai lệnh đơn
// 1 luồng logic

let luckyNumber = 10;
var badNumber = 20;
let myNumber = 30.5;


// Câu lệnh kép
// nhiều luồng logic

if(luckyNumber > 10){
    console.log('so lucky !!!', luckyNumber, myNumber);
}else{
    console.log('so so !!!', luckyNumber, myNumber);
}
if (badNumber ==20) {
    console.log('Oh, No');
}

// MiniGame
// thong tin quai vat:
// Mau quai vat
let emeny1_health = 100;
let emeny2_health = 200;
let emeny3_health = 300;
// Suc Tan cong
let anemy1_atk = 10;
let anemy2_atk = 20;
let anemy3_atk = 30;

// Khai bao cac thong tin ve Player: 

let player_Health = 1000; // khai bao bien chua thong tin ve mau cua nguoi choi
let player_atk = 20;     // khai bao bien chua thong tin ve kha nang tan cong
let player_genre = "Warior";   // khai bao bien chua thong tin ve loai Hero
let player_def = 5;     // Khai bao bien chua thong tin ve kha nang phong thu
let player_stanima = 30;   // Khai bao bien chua thong tin ve kha nang bao kich

// Thong tin ve Level

let main_level = "No Pain no gain";   // Khai bao bien chua thong tin ve ten Level
let main_quest = "Death_Map";       // khai bao bien chua thong tin ve nhiem vu
let isQuest_Complete = false;     // khai bao bien chua thong tin trang thai cua nhiem vu

// Player Conditions

let isAlive = true;   // khai bao chua thong tin ve nguoi choi con song khong
let isDIzzy = false;    // khai bao bien chua thong tin ve nguoi con tinh tao khong

// In combat

let isFaceToFace = true;    // khai bao bienn chua thong tin ve viec nguoi choi co dang nhin thay quai vat khong
let isInRange = true;       // khai bao bien chua thong tin ve viec nguoi choi va quai co dung gan nhau du de phat dong tan cong

// In Game


if (isAlive === true && isDIzzy === true && isFaceToFace === true && isRange === true) {
    // Neu nhuw Player con song va tinh tao va doi mat vs quai va trong khoang cos the danh nhau
    Attack();
    MonitorCombatStatus();
}
// theo doi thong tin tran dau
// log thong tin health cua plaer va enemy
function MonitorCombatStatus(){
    console.log("*----------------------------------*");
    console.log(" MONITORING ...........");
    if (isCombat) {
        console.log("the combat is happening !!!");

    }else{
        console.log("the combat is waiting");
    }
    console.log("Player and Enemies conditions");
    console.log("Player Health: ",player_Health);
    console.log("Enemy health is: ",enemy2_health);
    console.log("");
}

// Quai vat danh nhau vs player
function Attack(){
    enemy2_health -= 10; // quai vat mat mau khi ng choi tan cong
    enemyFightBack(); // quai vat danh lai
}
// Quai vat danh lai nguoi choi
// mau cua nguoi choi bi tru di theo ti le nhat dinh, tuy theo kha nang phong ngu
function enemyFightBack(){
    // Khi quai vat danh lai thi ng choi mat mau
    // ti le mau cua ng choi phu thuoc vao chi so phong ngu
    player_Health -= 10 * playe_def/100 * player_Health;
}