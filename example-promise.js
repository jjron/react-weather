/*function getTempCallback (location, callback) {
  callback(undefined, 78);
  callback('City not found');
}

getTempCallback('Seattle', function(err, temp) {
  if(err) {
    console.log('error', err);
  } else {
    console.log('success', temp);
  }
});

function getTempPromise(location) {
  return new Promise(function(resolve, reject) {
    resolve(79);
    reject('City not found');
  });
}

getTempPromise('Seattle').then(function(temp) {
  console.log('promise success', temp);
}, function(err) {
  console.log('promise error', err);
});*/

function addPromise(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('Arguments must be numbers');
    }
  });
};

addPromise(3, 1)
.then((temp) => {
  console.log('success:', temp);
}, (err) => {
  console.log('error:', err);
});

addPromise('lolwat', 3)
.then(temp => {
  console.log('success:', temp);
})
.catch(err => {
  console.log('error:', err);
});
