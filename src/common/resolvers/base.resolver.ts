import { UseGuards } from "@nestjs/common";
import { GqlAuthGuard } from "../guards/gql-auth.guard";
import { RolesGuard } from "../guards/roles.guard";
import { PermissionsGuard } from "../guards/permissions.guard";

@UseGuards(GqlAuthGuard, RolesGuard, PermissionsGuard)
export class BaseResolver {

}
