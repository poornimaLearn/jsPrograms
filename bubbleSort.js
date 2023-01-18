const arr = [9,3,1,5,4,6];

const bubbleSort = (nums) => {
  let swapped = false;

  do {
    swapped = false;

    for (let i = 0; i < nums.length - 1; i++){
      if(nums[i] > nums[i+1]){
        const temp = nums[i+1];
        nums[i+1] = nums[i]
        nums[i] = temp;
        swapped = true;
      }
    }
  } while (swapped)

  return nums;
}

bubbleSort(arr);