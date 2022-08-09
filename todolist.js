
// VARIABLE TANIMLAMA 

let btnDOM = document.querySelector("#liveToastBtn") // id'si liveToastBtn olan ekle yazan butona seçtik ve bu butonu btnDOM değişkenine atadık.
let listDOM = document.querySelector("#list") //id'si list olan ul'nin ID'si olan list'i seçtik ve listDOM'a atadık.
let taskDOM = document.querySelector('#task') //input'un ID'si olan task'ı seçip taskDOM'a atadık.
let liNum = document.getElementsByTagName("li"); //burda var olan bütün li elementlerini alıp ullength'e atadık böylece elimizde kaç madde yani li olduğunu öğrendik.


// MEVCUT LİSTEDEKİ ELEMANLARI SİLMEK İÇİN HER BİRİNE ÇARPI BUTONUNUN OLUŞTURULMASI
for(let i=0; i < liNum.length;i++){ 
    let closeButton = document.createElement("span"); //close icon'u span etiketi içersinde olduğu için yeni bir span elemanı oluşturup ve closeButton değişkenine atadık.
    closeButton.textContent = "\u00D7"; // listede çarpı işaretini oluşturabilmek için "\u00D7" kullandık.
    closeButton.classList.add("close"); // bu butona close class'ını ekledik.
    closeButton.onclick = removeButton; // ve çarpı işaretine basınca removeButton fonsiyonunu çalıştırması gerektini söyledik.
    liNum[i].append(closeButton); // closeButton değişkenini ullength'in 0, 1, 2... indexlerine ekleyerek aslında for döngüsünü kullanarak var olan listeye çarpı butonunu ekledik. 
    liNum[i].onclick = check; // üzerine tıklayınca check fonksiyonunu çalıştır dedik. Fonksiyonlar irazdan tanımlanacak.
}

// OGEDEKİ OLAYI DİNLEYELİM

btnDOM.addEventListener('click',taskAdd)  // addEventListener ile "click" dediğimiz için "Ekle butonuna tıklandığında  "taskAdd" fonksiyonu çalışacak.


//Fonksiyonlar 

function check(){
  this.classList.toggle("checked"); // toggle switch genelde iki şıklı (evet, hayır veya aktif pasif) gibi durumları belirtmek için kullanılır. burda toggle("checked")'i kullanarak tıklanan maddenin üstünü çiz ve yanına tik işareti koy demiş olduk. tekrar tıklayınca da eski haline gelecek.

}

function removeButton(){
  this.parentElement.remove('');  // çarpının bulunduğu maddeyi silmek için parentElement.remove classını kullandık.
}


//ELEMAN(yeni görev) EKLEMEK İÇİN GEREKENLER-taskAdd fonksiyonu
function taskAdd() {

    if (taskDOM.value == ""|| !taskDOM.value.trim())  {  // input değeri boş girildiğinde veya hiç girilmediğinde fonksiyon hata verdi. doğru girilince çalıştı
       
    $(".error").toast("show"); //error clasını kullanarak alert verdik(Bootstrap Toast ile)
  } else {
    $(".success").toast("show");

    let liDOM = document.createElement('li') //yeni bir li elementi yaratacagımızı ilan edip yaratacagımız li elementini liDOM değişkenine atayacağımızı söyledik.
    listDOM.appendChild(liDOM); // Yaratacağımız liDOM değişkeninin her seferinde mevcut listenin en sonuna eklenmesi gerektiğini tanımladık.
    liDOM.innerHTML = task.value.trim(); // Burda ise inputID.değer diyerek inputa girilen değerlerin liDOM'a atanması gerektiğini belirttik.
    taskDOM.value = "";//yeniden boş tanımladık ki input temiz olsun. yeni yazı yazılabilsin. Eski haline döndü.
    let taskArray=[];//boş bir array tanımladık
    taskArray.push(task.value.trim());//bu arraye taskın değerlerini ekledik.
    localStorage.setItem("taskArray",JSON.stringify(taskArray));//strig ifadeye dönüştürdük.
    taskDOM.value=" ";//yine boş tanımladık.

   //SONRADAN EKLENEN MADDELERİ SİLMEK İÇİN AYNI İŞLEMLERİN TEKRARI
    liDOM.onclick = check;       
    let closeButton = document.createElement("liDOM");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");  
    closeButton.onclick=removeButton;
    liDOM.append(closeButton);
    listDOM.append(liDOM);  
    addlocalStorage("taskDOM.value");
    $('#successToast').toast("show");
  }
}   

let itemArray=localStorage.getItem("taskArray") ? JSON.parse(localStorage.getItem("taskArray")) : [];
console.log(itemArray);
const liMaker=(text)=>{
    const li=document.createElement("span");
    closeButton.textContent="\u00D7";
    closeButton.classList.add("close");  
    closeButton.onclick=removeButton;
    li.append(closeButton);
    listDOM.append(li);
};
itemArray.forEach(item => {
    liMaker(item);
    
});

