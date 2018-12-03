describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33', () => {
      assert.equal (cipher.encode (33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"HIJKLMNOPQRSTUVWXYZABCDEFG");
    });

    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz"  con offest 33', () =>{
      assert.equal(cipher.encode (33, "abcdefghijklmnopqrstuvwxyz"),"hijklmnopqrstuvwxyzabcdefg");
    });

    it('debería retornar " " para " "  con offest 33', () =>{
      assert.equal(cipher.encode (33, " ")," ");
    });
    it('debería retornar "12ñ" para "12ñ"  con offest 33', () =>{
      assert.equal(cipher.encode (33, "12ñ"),"12ñ");
    });


  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33', () =>{
      assert.equal(cipher.decode(33, "HIJKLMNOPQRSTUVWXYZABCDEFG"),"ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });

    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offest 33', () =>{
      assert.equal(cipher.decode(33, "hijklmnopqrstuvwxyzabcdefg"),"abcdefghijklmnopqrstuvwxyz");
    });
    
    it('debería retornar " " para " "  con offest 33', () =>{
      assert.equal(cipher.decode (33, " ")," ");
    });
     it('debería retornar "12ñ" para "12ñ"  con offest 33', () =>{
      assert.equal(cipher.decode (33, "12ñ"),"12ñ");
    });
  });
});
