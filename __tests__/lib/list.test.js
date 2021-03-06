'use strict';

const List = require('../../lib/list');

describe('List', () => {
  describe('constructor',()=> {
    it('has length of zero',()=>{
      var list = new List();

      expect(list.length).toBe(0);
    });
  });

  describe('forEach',()=>{
    it('applies the callback to each of the elements in the array',()=>{
      var list = new List();
      list.push('cat');
      list.push('monkey');
      list.push('elephant');

      list.forEach(element => element.length);

      expect(list).toEqual({'0':3,'1':6,'2':8,'length':3});
    });
  });

  describe('push',()=>{
    it('adds a new thing to the end of the list',()=>{
      var list = new List();
      
      list.push('test');
      expect(list.length).toBe(1);
      expect(list[0]).toBe('test');

      list.push('test2');
      expect(list.length).toBe(2);
      expect(list[0]).toBe('test');
      expect(list[1]).toBe('test2');
    });
  });

  describe('map',()=>{
    it('returns a new list',()=>{
      var list = new List();
      var res = list.map(element => element);
      
      expect(res.length).toBe(list.length);
      expect(res).not.toBe(list);
    });

    it('returns new list with result of callback for each element', ()=>{
      var list = new List();
      list.push(2);
      list.push(3);

      var result = list.map(number => number*number);
      
      expect(result.length).toBe(list.length);
      expect(result[0]).toBe(4);
      expect(result[1]).toBe(9);
    });

    it('calls callback with element and index',()=>{
      var list = new List();
      list.push('John');
      list.push('Nathan');
      list.push('Craig');
      list.push('Ethan');
      list.push('Dylan');

      var result = list.map((element,index)=>`${index},${element}`);

      expect(result.length).toBe(list.length);
      expect(result[1]).toBe('1,Nathan');
    });
  });

  describe('pop',()=>{
    it('removes last thing in the list',()=>{
      var list = new List();
      list.push(1);
      list.push(2);
      
      list.pop();
      expect(list.length).toBe(1);
      expect(list).toEqual({'0':1,'length':1});
    });
    it('returns the removed item',()=>{
      var list = new List();
      list.push('cat');

      var result = list.pop();
      expect(result).toBe('cat');
    });
    it('does nothing if the lists length is zero',()=>{
      var list = new List();
      
      expect(list.pop()).toBe(undefined);
      expect(list).toEqual({'length':0});
    });
  });

  describe('slice',()=>{
    it('returns an array out of elements remove',()=>{
      var list = new List();
      list.push(1);
      list.push(2);
      list.push(3);
      list.push(4);

      var result = list.slice(3);
      var result2 = list.slice(1);

      expect(result).toEqual({'0':4,'length':1});
      expect(result2).toEqual({'0':2,'1':3,'2':4,'length':3});
    });

    it('uses the second argument as an endpoint',()=>{
      var list = new List();
      list.push(1);
      list.push(2);
      list.push(3);
      list.push(4);

      var result = list.slice(1,2);

      expect(result).toEqual({'0':2,'1':3,'length':2});
    });
  });

  describe('fitler',()=>{
    it('returns a new array',()=>{
      var list = new List();
      var result = list.filter(element => element);

      expect(result.length).toBe(list.length);
      expect(result).not.toBe(list);
    });

    it('filters out elements that don\'t pass a given conditional',()=>{
      var list = new List();
      list.push('apple');
      list.push('pear');
      list.push('grape');
      list.push('banana');

      var result = list.filter(element => element.length===5);

      expect(result.length).not.toBe(list.length);
      expect(result).toEqual({'0':'apple','1':'grape','length':2});
    });
  });
});