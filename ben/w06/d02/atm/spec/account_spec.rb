require_relative '../lib/account'
require_relative '../lib/atm'

describe Account do

    let(:account) { Account.new }

    describe ".deposit" do
        it "should increase the balance by 55 when we deposit 55" do
            account.deposit(55)
            expect(account.balance).to eq(55)      
        end

        it "works with multiple deposits" do
            account.deposit(40)
            account.deposit(20)
            account.deposit(5)
            expect(account.balance).to eq(65)
        end
    end

    describe ".withdraw" do
    end
end