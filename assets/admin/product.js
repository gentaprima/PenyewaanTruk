function add_product(base_url){
    document.getElementById("modal_title").innerHTML = "Form Tambah Produk"
    document.getElementById("button").innerHTML = "Tambah Data"
    document.getElementById("product_name").value = ""
    document.getElementById("merk_name").value = ""
    document.getElementById("type_name").value = ""
    document.getElementById("description").value = ""
    document.getElementById("capacity").value = ""
    document.getElementById("radius").value = ""
    document.getElementById("photo").innerHTML = "Choose File"
    document.getElementById("form").action = base_url
}
function update_product(base_url,product,merk,type,description,capacity,radius,photo,id){
    document.getElementById("modal_title").innerHTML = "Form Update Produk"
    document.getElementById("button").innerHTML = "Update Data"
    document.getElementById("product_name").value = product;
    document.getElementById("merk_name").value = merk;
    document.getElementById("type_name").value = type;
    document.getElementById("description").value = description;
    document.getElementById("capacity").value = capacity;
    document.getElementById("radius").value = radius;
    document.getElementById("photo").innerHTML = photo;
    document.getElementById("id_product").value = id;
    document.getElementById("form").action = base_url
}
function delete_produk(base_url){
    document.getElementById("buttondelete").href = base_url;
}