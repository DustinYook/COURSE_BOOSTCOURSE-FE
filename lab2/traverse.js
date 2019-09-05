var result = [];

function isArray(o) 
{
    return Object.prototype.toString.call(o) === '[object Array]';
}

function traverse(x) 
{
    if (isArray(x))
        traverseArray(x);
    else if ((typeof x === 'object') && (x !== null))
        traverseObject(x);
}

function traverseArray(arr) 
{
    arr.forEach((x) => 
    {
        if (x.type === 'sk')
            result.push(x.name);
        traverse(x);
    });
}

function traverseObject(obj) 
{
    for (var key in obj) 
    {
        if (obj.hasOwnProperty(key))
            traverse(obj[key]);
    }
}

traverse(data);
console.log(result);