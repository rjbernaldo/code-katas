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
  end
end
