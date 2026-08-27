export function pipe(...fns) {
    return function (num) {
        // console.log("num in pipe: ", num);
        let result = num;
        fns.forEach((fn) => {
            if (!fn) {
                throw new Error("function cann't be null");
            }
            //   console.log("result before: ", result);
            result = fn(result);
            //   console.log("result after: ", result);
        });
        return result;
    };
}
