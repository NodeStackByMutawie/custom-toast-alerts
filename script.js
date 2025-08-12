
     const toastBox = document.getElementById("toastBox");
        const successMsg = '<i class="fa-solid fa-circle-check" style="color:green"></i> Successfully submitted';
        const errorMsg = '<i class="fa-solid fa-circle-xmark" style="color:red"></i> Please fix the error';
        const invalidMsg = '<i class="fa-solid fa-triangle-exclamation" style="color:orange"></i> Invalid input, check again';
      

function showToast(Msg , type ='success'){
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerHTML = Msg;
    toastBox.appendChild(toast);
    setTimeout(()=>{
        toast.remove();
    },6000)
}



