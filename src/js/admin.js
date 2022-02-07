function FileConvertSize(aSize){
	aSize = Math.abs(parseInt(aSize, 10));
	var def = [[1, 'octets'], [1024, 'ko'], [1024*1024, 'Mo'], [1024*1024*1024, 'Go'], [1024*1024*1024*1024, 'To']];
	for(var i=0; i<def.length; i++){
		if(aSize<def[i][0]) return (aSize/def[i-1][0]).toFixed(2)+' '+def[i-1][1];
	}
}

function displayCategories(){

}

document.getElementById('upload').addEventListener('change', (event) => {
    var files = document.getElementById('upload').files;
    var file;

    var result = document.getElementById('upload-display');
    result.innerHTML = "";

    for (var i = 0; i < files.length; i++) {
        file = files[i];
        

        console.log(file);
        result.innerHTML = result.innerHTML + 
        '<div class="upload-items"> <img src="' + URL.createObjectURL(file) + '" /> <div><h2>Name: <b>' + file.name + '</b></h2> <p>Size: ' + FileConvertSize(file.size) + '</p></div> <select>' + displayCategories() + '</select> <div><button class="btn confirm" data-name="' + file.name + '"><i class="fas fa-check"></i></button><button class="btn danger" data-name="' + file.name + '"><i class="fas fa-times"></i></button></div> </div>';
    }
})