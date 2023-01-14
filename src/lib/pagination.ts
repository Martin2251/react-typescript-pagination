export function getPaginationItems(
    currentPage: number,
    lastPage: number,
    maxLength: number
  ) {
    const res: Array<number> = [currentPage];
  // handle lastPage less than or equal to maxLength
  if (lastPage <= maxLength) {
    for (let i = 1; i <= lastPage; i++) {
      res.push(i);
    }
  }

   // handle ellipsis logics
   else {
    const firstPage = 1;
    const confirmedPagesCount = 3;
    const deductedMaxLength = maxLength - confirmedPagesCount;
    const sideLength = deductedMaxLength / 2;

    // handle ellipsis in the middle
    if (currentPage - firstPage < sideLength || lastPage - currentPage < sideLength) {
      // TODO: populate result array
    }
  }
  
    return res;
  }

