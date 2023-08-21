function AddItem(itemName){
    const productNameContainer=document.getElementById('product-name');
    const p=document.createElement('p');
    p.classList.add('text-sm','font-semibold','text-site-black','mb-1');
    p.innerText=itemName;
    productNameContainer.appendChild(p);
}

function convertNumber(stringValue){
    const priceString=document.getElementById(stringValue).innerText;
    const price=parseFloat(priceString);
    return price;
}

document.getElementById('item1').addEventListener('click',function(){
    AddItem('K. Accessories'); 
    const totalPrice=convertNumber('total-price');
    const mainPrice=convertNumber('full-total-price');
    document.getElementById('total-price').innerText=(totalPrice+39.00).toFixed(2);
    document.getElementById('full-total-price').innerText=(mainPrice+39.00).toFixed(2);
});

document.getElementById('item2').addEventListener('click',function(){
    AddItem('K. Accessories'); 
    const totalPrice=convertNumber('total-price');
    const mainPrice=convertNumber('full-total-price');
    document.getElementById('total-price').innerText=(totalPrice+25.00).toFixed(2);
    document.getElementById('full-total-price').innerText=(mainPrice+25.00).toFixed(2);
});

document.getElementById('item3').addEventListener('click',function(){
    AddItem('Home Cooker'); 
    const totalPrice=convertNumber('total-price');
    const mainPrice=convertNumber('full-total-price');
    document.getElementById('total-price').innerText=(totalPrice+49.00).toFixed(2);
    document.getElementById('full-total-price').innerText=(mainPrice+49.00).toFixed(2);
});
document.getElementById('item4').addEventListener('click',function(){
    AddItem('Sports Back Cap'); 
    const totalPrice=convertNumber('total-price');
    const mainPrice=convertNumber('full-total-price');
    document.getElementById('total-price').innerText=(totalPrice+49.00).toFixed(2);
    document.getElementById('full-total-price').innerText=(mainPrice+49.00).toFixed(2);
});
document.getElementById('item5').addEventListener('click',function(){
    AddItem('Full Jersey Set'); 
    const totalPrice=convertNumber('total-price');
    const mainPrice=convertNumber('full-total-price');
    document.getElementById('total-price').innerText=(totalPrice+69.00).toFixed(2);
    document.getElementById('full-total-price').innerText=(mainPrice+69.00).toFixed(2);
});
document.getElementById('item6').addEventListener('click',function(){
    AddItem('Sports cates'); 
    const totalPrice=convertNumber('total-price');
    const mainPrice=convertNumber('full-total-price');
    document.getElementById('total-price').innerText=(totalPrice+159.00).toFixed(2);
    document.getElementById('full-total-price').innerText=(mainPrice+159.00).toFixed(2);
});