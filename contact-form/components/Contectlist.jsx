import { getContact, updateContact } from "@/app/actions"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Inbox, MailOpen, MessageSquare, Reply } from "lucide-react";

export default async function Contectlist() {
    const contacts = await getContact()
    const totalCount = contacts.length;
    const newCount = contacts.filter((c) => c.status === "new").length;
    const readCount = contacts.filter((c) => c.status === "read" || c.status === undefined).length;
    const repliedCount = contacts.filter((c) => c.status === "replied").length;

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Contact Messages</h2>
                <div className="flex items-center gap-4">
                    <Badge variant="secondary">{contacts.length} messages</Badge>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                    <CardContent className="flex items-center justify-between p-6">
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">Total Messages</p>
                            <h4 className="text-2xl font-bold mt-1">{totalCount}</h4>
                        </div>
                        <div className="p-3 bg-primary/10 text-primary rounded-full">
                            <MessageSquare className="h-5 w-5" />
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="flex items-center justify-between p-6">
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">New Messages</p>
                            <h4 className="text-2xl font-bold mt-1 text-blue-600">{newCount}</h4>
                        </div>
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-full">
                            <Inbox className="h-5 w-5" />
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="flex items-center justify-between p-6">
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">Read Messages</p>
                            <h4 className="text-2xl font-bold mt-1 text-amber-600">{readCount}</h4>
                        </div>
                        <div className="p-3 bg-amber-50 text-amber-600 rounded-full">
                            <MailOpen className="h-5 w-5" />
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="flex items-center justify-between p-6">
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">Replied Messages</p>
                            <h4 className="text-2xl font-bold mt-1 text-green-600">{repliedCount}</h4>
                        </div>
                        <div className="p-3 bg-green-50 text-green-600 rounded-full">
                            <Reply className="h-5 w-5" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            {contacts.length === 0 ? (
                <Card>
                    <CardContent className="flex flex-col items-center justify-center py-12">
                        <Mail className="h-12 w-12 text-muted-foreground mb-4" />
                        <h3 className="text-lg font-semibold mb-2">No messages yet</h3>
                    </CardContent>
                </Card>
            ) : (
                <div className="grid gap-4">
                    {contacts.map((contact) => (
                        <Card key={contact._id}>
                            <CardHeader className="pb-3">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <CardTitle className="text-lg">{contact.subject}</CardTitle>
                                        <p className="text-sm text-muted-foreground">
                                            From: {contact.name} ({contact.email})
                                        </p>
                                    </div>
                                    <Badge
                                        variant={contact.status === "new" ? "default" : "secondary"}
                                    >
                                        {contact.status}
                                    </Badge>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground mb-4">
                                    {contact.message}
                                </p>

                                <div className="flex items-center justify-between pt-4 border-t">
                                    <p className="text-xs text-muted-foreground">
                                        {new Date(contact.createdAt).toLocaleDateString()}
                                    </p>

                                    <div className="flex gap-2">
                                        {contact.status === "new" && (
                                            <form
                                                action={async () => {
                                                    "use server";
                                                    await updateContact(contact._id, "read");
                                                }}
                                            >
                                                <Button variant="outline" size="sm" type="submit">
                                                    Mark as Read
                                                </Button>
                                            </form>
                                        )}
                                        {contact.status === "read" && (
                                            <form
                                                action={async () => {
                                                    "use server";
                                                    await updateContact(contact._id, "replied");
                                                }}
                                            >
                                                <Button variant="outline" size="sm" type="submit">
                                                    Mark as Replied
                                                </Button>
                                            </form>
                                        )}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}