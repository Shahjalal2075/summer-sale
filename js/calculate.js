document.getElementById('product-purchase').disabled = true;
document.getElementById('cuppon-apply').disabled = true;

function AddItem(itemName){
    const productNameContainer=document.getElementById('product-name');
    const count=productNameContainer.childElementCount;
    const p=document.createElement('p');
    p.classList.add('text-sm','font-semibold','text-site-black','mb-1');
    p.innerText=count+1+'. '+itemName;
    productNameContainer.appendChild(p);
}


function convertNumber(stringValue){
    const priceString=document.getElementById(stringValue).innerText;
    const price=parseFloat(priceString);
    return price;
}

function purchaseCheck(priceTotal){
    if(priceTotal>0)
    {
        document.getElementById('product-purchase').disabled = false;
    }
    if(priceTotal>199)
    {
        document.getElementById('cuppon-apply').disabled = false;
    }
}

document.getElementById('item1').addEventListener('click',function(){
    AddItem('K. Accessories'); 
    const totalPrice=convertNumber('total-price');
    const mainPrice=convertNumber('full-total-price');
    purchaseCheck(totalPrice+39);
    document.getElementById('total-price').innerText=(totalPrice+39.00).toFixed(2);
    document.getElementById('full-total-price').innerText=(mainPrice+39.00).toFixed(2);
});

document.getElementById('item2').addEventListener('click',function(){
    AddItem('K. Accessories'); 
    const totalPrice=convertNumber('total-price');
    const mainPrice=convertNumber('full-total-price');
    purchaseCheck(totalPrice+25);
    document.getElementById('total-price').innerText=(totalPrice+25.00).toFixed(2);
    document.getElementById('full-total-price').innerText=(mainPrice+25.00).toFixed(2);
});

document.getElementById('item3').addEventListener('click',function(){
    AddItem('Home Cooker'); 
    const totalPrice=convertNumber('total-price');
    const mainPrice=convertNumber('full-total-price');
    purchaseCheck(totalPrice+49);
    document.getElementById('total-price').innerText=(totalPrice+49.00).toFixed(2);
    document.getElementById('full-total-price').innerText=(mainPrice+49.00).toFixed(2);
});
document.getElementById('item4').addEventListener('click',function(){
    AddItem('Sports Back Cap'); 
    const totalPrice=convertNumber('total-price');
    const mainPrice=convertNumber('full-total-price');
    purchaseCheck(totalPrice+49);
    document.getElementById('total-price').innerText=(totalPrice+49.00).toFixed(2);
    document.getElementById('full-total-price').innerText=(mainPrice+49.00).toFixed(2);
});
document.getElementById('item5').addEventListener('click',function(){
    AddItem('Full Jersey Set'); 
    const totalPrice=convertNumber('total-price');
    const mainPrice=convertNumber('full-total-price');
    purchaseCheck(totalPrice+69);
    document.getElementById('total-price').innerText=(totalPrice+69.00).toFixed(2);
    document.getElementById('full-total-price').innerText=(mainPrice+69.00).toFixed(2);
});
document.getElementById('item6').addEventListener('click',function(){
    AddItem('Sports cates'); 
    const totalPrice=convertNumber('total-price');
    const mainPrice=convertNumber('full-total-price');
    purchaseCheck(totalPrice+159);
    document.getElementById('total-price').innerText=(totalPrice+159.00).toFixed(2);
    document.getElementById('full-total-price').innerText=(mainPrice+159.00).toFixed(2);
});

document.getElementById('cuppon-apply').addEventListener('click',function(){
    const cupponCode= document.getElementById('cuppon-code').value; 
    const totalPrice=convertNumber('total-price');
    discount=(totalPrice*20)/100;
    if(cupponCode=='SELL200')
    {
        document.getElementById('discount-price').innerText=(discount).toFixed(2);
        document.getElementById('full-total-price').innerText=(totalPrice-discount).toFixed(2);
    }
    else{
        alert('Enter Correct Cuppon Code.')
    }
    document.getElementById('cuppon-code').value='';
});

document.getElementById('homepage').addEventListener('click',function(){
    window.location.href='index.html';
});
