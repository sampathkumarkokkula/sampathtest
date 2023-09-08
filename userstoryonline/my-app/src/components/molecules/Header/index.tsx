import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import { Box, Stack } from "@mui/material";
import avatarimg from "../../../assets/images/avatar.svg";
import { CandidateInfo } from "../../../constants";
import Typography from "../../atoms/Typography";
import { Avatar } from "../../atoms/avatar";

type Props = {
  username: string;
};

const Header = (props: Props) => {
  return (
    <Box display="flex" justifyContent="space-between" padding="30px">
      <Stack direction="row" spacing="10px" alignItems="center">
        <AssignmentIndIcon />
        <Typography variant="h5">{CandidateInfo}</Typography>
      </Stack>
      <Stack direction="row" spacing="20px" alignItems="center">
        <Typography variant="h5">{props.username}</Typography>
        <Avatar src={avatarimg} />
      </Stack>
    </Box>
  );
};

export default Header;
