// we are given an array of any values, we should shuffle it and change their position
// to do so, we need to start from the last index and towards the beginning.
// we create a random index between that index and 0
// then we create a temperily variable that holds the the value at that index
// then we override the value of that index with random index
// and override the random index with that index

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let value = arr[i];
    arr[i] = arr[randomIndex];
    arr[randomIndex] = value;
  }
}
