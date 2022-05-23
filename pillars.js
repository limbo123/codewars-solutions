function pillars(num_pill, dist, width) {
    if (
      !num_pill >= 1 &&
      dist >= 10 &&
      dist <= 30 &&
      width >= 10 &&
      width <= 50
    ) {
      return -1;
    }
    dist = dist * 100;
    console.log("dist", dist);
    return (
      (num_pill - 1) * dist + (num_pill > 1 ? num_pill - 2 : num_pill - 1) * width
    );
  }
