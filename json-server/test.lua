local power = UnitPower("player");


print("Current mana = >", power);

function UseContainerItemByName(search)
    for bag = 0,4 do
      for slot = 1,GetContainerNumSlots(bag) do
        local item = GetContainerItemLink(bag,slot)
        if item and string.find(item,search) then
          UseContainerItem(bag,slot)
        end
      end
    end
  end

print("TEST");

if power < 2 then
    UseContainerItemByName("ICE COLD MILK")
end