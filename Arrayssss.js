function minimumDifference(nums) {
    const n = nums.length >> 1;
    const f = {};
    const g = {};
  
    for (let i = 0; i < 1 << n; i++) {
      let s = 0;
      let cnt = 0;
      let s1 = 0;
      let cnt1 = 0;
  
      for (let j = 0; j < n; j++) {
        if ((i & (1 << j)) !== 0) {
          s += nums[j];
          cnt++;
          s1 += nums[n + j];
          cnt1++;
        } else {
          s -= nums[j];
          s1 -= nums[n + j];
        }
      }
  
      if (!f[cnt]) f[cnt] = new Set();
      if (!g[cnt1]) g[cnt1] = new Set();
  
      f[cnt].add(s);
      g[cnt1].add(s1);
    }
  
    let ans = Infinity;
    for (let i = 0; i <= n; i++) {
      const fi = [...f[i]].sort((a, b) => a - b);
      const gi = [...g[n - i]].sort((a, b) => a - b);
  
      for (const a of fi) {
        let left = 0;
        let right = gi.length - 1;
        const b = -a;
  
        while (left < right) {
          const mid = (left + right) >> 1;
          if (gi[mid] >= b) {
            right = mid;
          } else {
            left = mid + 1;
          }
        }
  
        ans = Math.min(ans, Math.abs(a + gi[left]));
  
        if (left > 0) {
          ans = Math.min(ans, Math.abs(a + gi[left - 1]));
        }
      }
    }
  
    return ans;
  }
  
  // Test
  const xyz = [3,9,7,3];
  console.log(minimumDifference(xyz)); // Output: 2
  
  const abc = [36,-36];
  console.log(minimumDifference(abc)); // Output: 72 

  const input3 = [2,-1,0,4,-2,-9];
  console.log(minimumDifference(input3)); // Output: 1 
  