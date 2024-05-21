import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { User } from '@prisma/client'
import UserRow from './user-row'

export default function UsersList({ users }: { users: User[] }) {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Email</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Admin</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user, index) => (
            <UserRow key={user.id} user={user} />
          ))}
        </TableBody>
      </Table>
      <div className="mt-2 text-xs text-muted-foreground">
        Showing <strong>{users.length}</strong> users
      </div>
    </div>
  )
}
