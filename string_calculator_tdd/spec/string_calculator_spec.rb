require 'spec_helper'
require 'byebug'

describe StringCalculator do
  before :each do
    @sc = StringCalculator.new
  end

  describe '#add' do
    context 'when an empty string is passed' do
      it 'should return 0' do
        expect(@sc.add '').to eq(0)
      end
    end

    context 'when a single digit is passed' do
      it 'should return the digit' do
        expect(@sc.add '1').to eq(1)
      end
    end

    context 'when two digits are passed' do
      it 'should return the sum of those digits' do
        expect(@sc.add '1,2').to eq(3)
      end
    end

    context 'when more than two digits are passed' do
      it 'should return the sum of those digits' do
        expect(@sc.add '1,2,3,4,5').to eq(15)
      end
    end

    context 'when other delimiters are used' do
      it 'should be able to support newlines' do
        expect(@sc.add '1\n2').to eq(3)
      end

      it 'should be able to support both newlines and commas' do
        expect(@sc.add '1\n2,3\n4,5').to eq(15)
      end

      it 'should be able to support custom delimiters' do
        expect(@sc.add '//*\n1*2').to eq(3)
      end

      it 'should be able to support all types of delimiters' do
        expect(@sc.add '//*\n1*2,3,4\n5').to eq(15)
      end
    end
    
    context 'when a digit is bigger than 1000' do
      it 'should be ignored' do
        expect(@sc.add '5,1001').to eq(5)
      end
    end

    context 'delimiters with any length' do
      it 'should be supported' do
        expect(@sc.add '//[---]\n1---2').to eq(3)
      end
    end

    context 'multiple delimiters' do
      it 'should be suppored' do
        expect(@sc.add '//[-][+][z]\n1-2+3z4').to eq(10)
      end
    end
  end
end
