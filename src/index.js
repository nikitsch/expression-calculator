function eval() {
    return;
}

function expressionCalculator(expr) {
    expr = expr.replace(/ /g, '');
    if (expr.indexOf('/0') !== -1)
      throw new Error('TypeError: Division by zero.');
    let bracket = 0;
    expr.split('').forEach((v) => {
      v === ')' ? bracket-- : false;
      v === '(' ? bracket++ : false;
    });
    if (bracket !== 0)
      throw new Error('ExpressionError: Brackets must be paired');
    expr = new Function('return ' + expr);
    return expr();
}

module.exports = {
    expressionCalculator
}
