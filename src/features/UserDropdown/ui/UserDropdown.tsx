import CustomDropdown from "#shared/ui/CustomDropdown";
import { useUserStore } from "#entities/User/model/store";
import type { UserDropdownProps } from "#entities/User/model/types";
import { mapUserToDropdown } from "#entities/User/model/mapper";

export function UserDropdown(props: UserDropdownProps) {
    const { onChange, choosenUserId } = props;

    const users = useUserStore(state => state.users);
    const selectedUser = users.find((user) => user.id === choosenUserId);

    const currentUser = selectedUser
        ? mapUserToDropdown(selectedUser)
        : null;
        
    const options = users.map((item) => ({
        id: item.id,
        label: item.name
    }));

    return (
        <CustomDropdown options={options} onChange={onChange} value={currentUser} />
    )
}