'use strict';

function parse(expr) {
  // return ...
}

function Lexer() {
}

Lexer.prototype.lex = function(text) {
  // Tokenization will be done here
}

function AST(lexer) {
  this.lexer = lexer;
}

AST.prototype.ast = function(text) {
  this.tokens = this.lexer.lex(text);
  // AST building will be done here
}

function ASTCompiler(astBuilder) {
  this.astBuilder = astBuilder;
}

ASTCompiler.prototype.compile = function(text) {
  var ast = this.astBuilder.ast(text);
  // AST compilation will be done here
}

module.exports = parse;
